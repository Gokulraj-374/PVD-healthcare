import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message?: string;
  createdAt: any;
}

const LOCAL_LEADS_KEY = 'pvd_local_leads';

// Helper to get local leads
export function getLocalLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LOCAL_LEADS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read local leads:", e);
    return [];
  }
}

// Helper to save local leads
export function saveLocalLeads(leads: Lead[]): void {
  try {
    localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(leads));
  } catch (e) {
    console.error("Failed to write local leads:", e);
  }
}

// Submit a lead with graceful Firestore timeout and localStorage fallback
export async function submitLead(leadData: Omit<Lead, 'id' | 'createdAt'>): Promise<{ success: boolean; isLocal: boolean }> {
  const localId = `local_${Date.now()}`;
  const newLead: Lead = {
    id: localId,
    ...leadData,
    createdAt: new Date().toISOString()
  };

  try {
    // Attempt Firestore write with a 3-second timeout
    const firebasePromise = addDoc(collection(db, 'leads'), {
      ...leadData,
      createdAt: serverTimestamp()
    });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Firestore timeout')), 3000)
    );

    await Promise.race([firebasePromise, timeoutPromise]);
    return { success: true, isLocal: false };
  } catch (error) {
    console.warn("Firestore save failed or timed out. Falling back to local storage:", error);
    
    // Save to local storage
    const currentLeads = getLocalLeads();
    currentLeads.push(newLead);
    saveLocalLeads(currentLeads);
    
    return { success: true, isLocal: true };
  }
}

// Subscribe to leads (merges Firestore real-time updates and localStorage)
export function subscribeToLeads(
  onUpdate: (leads: Lead[]) => void,
  onError?: (err: Error) => void
): () => void {
  const handleUpdate = (firestoreLeads: Lead[]) => {
    const localLeads = getLocalLeads();
    // Combine both sets of leads
    const combined = [...firestoreLeads, ...localLeads];
    
    // Sort combined list by date (descending)
    combined.sort((a, b) => {
      const getTimestamp = (item: Lead) => {
        if (!item.createdAt) return 0;
        if (item.createdAt.toDate) return item.createdAt.toDate().getTime();
        return new Date(item.createdAt).getTime();
      };
      return getTimestamp(b) - getTimestamp(a);
    });
    
    onUpdate(combined);
  };

  try {
    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const firestoreLeads = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Lead[];
        handleUpdate(firestoreLeads);
      },
      (error) => {
        console.warn("Firestore subscription failed. Falling back to local storage:", error);
        handleUpdate([]);
        if (onError) onError(error);
      }
    );
    
    return unsubscribe;
  } catch (error: any) {
    console.warn("Failed to initialize Firestore listener. Sticking to local storage:", error);
    handleUpdate([]);
    return () => {};
  }
}

// Delete a lead (from Firestore, localStorage, or both)
export async function deleteLead(leadId: string): Promise<void> {
  // If it's a local-only lead, we don't need to touch Firestore
  if (!leadId.startsWith('local_')) {
    try {
      await deleteDoc(doc(db, 'leads', leadId));
    } catch (err) {
      console.warn("Firestore delete failed, lead may be local or network issue:", err);
    }
  }

  // Remove from local storage
  const currentLeads = getLocalLeads();
  const updatedLeads = currentLeads.filter(l => l.id !== leadId);
  saveLocalLeads(updatedLeads);
}

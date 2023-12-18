import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";

import { db } from '@/lib/firebase';

export default async function handler(req, res) {

  const { props } = req.query;

  switch (req.method) {
    case 'GET':
      if (props[0] === 'getall') {
        const propertiesRef = collection(db, "properties");

        const q = query(propertiesRef);
        const querySnapshot = await getDocs(q);

        const properties = []

        querySnapshot.forEach((doc) => {
          const propertyData = doc.data()

          properties.push({ id: doc.id, ...propertyData })

        });

        return res.status(200).send([...properties])

      } else if (props[0] === 'id') {
        const docRef = doc(db, "properties", props[1]);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data()
          return res.status(200).json(data)
        } else {
          return res.status(404).json({ error: 'Propriedade não encontrada' })
        }
      }
  }

}
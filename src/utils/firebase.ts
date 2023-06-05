import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { PostData } from "../types/posts";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,setPersistence,browserSessionPersistence} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);


const postDB=async(post:PostData)=>{
    try {
        await addDoc(collection(db, "posts"), post);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};

const getPostFromDB = async(): Promise <PostData[]>=>{
    const resp: PostData[]=[
        {
            userimg: "https://i.pinimg.com/564x/0d/06/c4/0d06c47be2206f3bf0ad8d5b52b3ac46.jpg",
            username: "Nakosume",
            usertag: "@nako_13",
            message: `You know, maybe al this anxiety Im feeling right now might be jus an overreaction, but still, Im hella' scared of what the outcome will be.
    
            So, it is what it is`,
            image:"https://i.pinimg.com/564x/0d/06/c4/0d06c47be2206f3bf0ad8d5b52b3ac46.jpg",
            comcount: "0",
            retcount: "0",
            likescount: "0",
        },
    
        {
            userimg: "https://i.pinimg.com/564x/0d/cd/2c/0dcd2c0ebbc1b35eb28a3aa666cad777.jpg",
            username: "Cheese",
            usertag: "@cheeto-11",
            message: `have you seen what's happening on Silicon Valley? that's gonna be terrible for the global economy.
            Anyways, who's hungry?`,
            image:"https://pbs.twimg.com/media/FAe_czuWQAcq9MV?format=png&name=small",
            comcount: "0",
            retcount: "0",
            likescount: "0",
        },
    
        {
            userimg: "https://pbs.twimg.com/media/E1yT-HxVUAEsiYV.jpg",
            username: "LazyAF",
            usertag: "@lazy_af",
            message: `who's cat is this?
            Damn he ugly.`,
            image:"https://i.ytimg.com/vi/fTJ5o_uW3eM/maxresdefault.jpg",
            comcount: "0",
            retcount: "0",
            likescount: "0",
        },
    
        {
            userimg: "https://i.pinimg.com/736x/a3/d5/ad/a3d5ad5cd0dea2a42a32754d20d0d185.jpg",
            username: "Danko13",
            usertag: "@danko13",
            message: `nice`,
            image:"https://i1.sndcdn.com/artworks-ZqOHYpsjZtAtmTYR-4gjPpA-t500x500.jpg",
            comcount: "0",
            retcount: "0",
            likescount: "0",
        },
    
        {
            userimg: "https://i.pinimg.com/736x/00/31/68/003168c267d05e5fbc19ece470d54df9.jpg",
            username: "not a neon user",
            usertag: "@CertifiedNeonMain",
            message: `obligatory Neon appretiation post #16977`,
            image:"https://i.pinimg.com/originals/9a/72/d1/9a72d1ec4d69ba8f99c62cc121b52865.jpg",
            comcount: "0",
            retcount: "0",
            likescount: "0",
        },
    ];
    const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),
  } as PostData)
});
return resp.reverse();
}

const registerUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };

  const loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };


export default{postDB,getPostFromDB,registerUser,loginUser}; 
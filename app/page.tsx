import styles from "@/app/ui/home.module.css";
import { outfit } from "@/app/ui/fonts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="w-full h-full flex ">
        <p
          className={`${outfit.className} text-xl text-gray-800 md:text-3xl md:leading-normal text-dark_raspberry`}
        >
          Hello world
        </p>
      </div>
      <div className={styles.shape} />
    </main>
  );
}

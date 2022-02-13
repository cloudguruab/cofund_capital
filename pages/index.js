import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import {MainSection, PreviewSection,
TitleSection, CardSection} from "../components/Section";
import Footer from "../components/Footer";
import { Main } from "next/document";

export default function Home() {

  return (
    <>
      <Header/>
      <PreviewSection/>
      <CardSection/>
      <TitleSection/>
      <MainSection/>
      <Footer/>
    </>
  )
}
import Image from 'next/image'
import styles from './page.module.css'
import CsvUploadForm from '../../components/CSVuploader'
import TestApi from '../../components/TestApi'
import PetsList from '../../components/PetsList'

export default function Home() {
  return (
    <div>
    <div>Hello World</div>
    <CsvUploadForm />
    <TestApi />
    <PetsList /> 
    </div>
  )
}

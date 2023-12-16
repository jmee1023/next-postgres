import Image from 'next/image'
import styles from './page.module.css'
import CsvUploadForm from '../../components/CSVuploader'
import TestApi from '../../components/TestApi'

export default function Home() {
  return (
    <div>
    <div>Hello World</div>
    <CsvUploadForm />
    <TestApi />
    </div>
  )
}

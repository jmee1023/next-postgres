import Image from 'next/image'
import styles from './page.module.css'
import CsvUploadForm from '../../components/CSVuploader'
import TestApi from '../../components/TestApi'
import LeadsList from '../../components/LeadsList'
import TestGet from '../../components/TestGet'


export default function Home() {
  console.log("Helllllllo")
  //HelloWord()
  return (
    <div>
    <div>Hello World</div>
    <CsvUploadForm />
    <TestApi />
    <LeadsList /> 
    <TestGet />
    </div>
  )
}

function HelloWord(){

  const i = 4 + 4
  let j = 0
  while (j < i){
    console.log(j)
    j++

  }
}

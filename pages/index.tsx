import { styleShapes } from '@tldraw/tldraw/dist/types/state/commands';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import vennDiagram from "../modules/venn-diagram.svg"
import mindMap from "../modules/mind-map.svg"
import flowChart from "../modules/flow-chart.svg"

const Home: NextPage = () => {

  const styles = {
    container: {
      width:370, 
      marginLeft: 10
    },
    p: {
      fontSize: 12, 
      marginLeft: 15
    },
    h1: {
      fontSize: 20, 
      marginLeft: 15
    },
    h2: {
      fontSize: 12, 
      marginLeft: 15
    },
    svg1: {
      width: 370
    }
  }
  

  return (
    <div>
      <Head>
        <title>Tldraw Hot Reloading</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div style={styles.container}>
        <h1 style={{fontSize: 24, marginLeft: 15}}>
          Introduction To Diagramming
        </h1>
        <p style={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <h2 style={styles.h2}>
          Venn Diagrams
        </h2>
        <img style={styles.svg1} src={vennDiagram.src}/>
        <p style={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        </p>
        <h2 style={styles.h2}>
          Mind Maps
        </h2>
        <img style={styles.svg1} src={mindMap.src}/>
        <p style={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  
        </p>
        <h2 style={styles.h2}>
          Flow Chart
        </h2>
        <img style={styles.svg1} src={mindMap.src}/>
        
      </div>

      {/* <Tldraw />   */}

      
    </div>
  )
}

export default Home

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
      width:470, 
      padding: "0px 10px",
      marginLeft: 10
    },
    p: {
      fontSize: 14, 
      marginLeft: 20
    },
    h1: {
      marginTop: 20,
      fontSize: 22, 
      marginLeft: 20
    },
    h2: {
      marginTop: 10,
      fontSize: 16, 
      marginLeft: 20
    },
    svg1: {
      width: 450
    }
  }
  

  return (
    <div>
      <Head>
        <title>Tldraw Hot Reloading</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div style={styles.container}>
        <h1 style={styles.h1}>
          Basics of Diagramming
        </h1>
        <p style={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <h2 style={styles.h2}>
        Flow Chart
        </h2>
        <img style={styles.svg1} src={flowChart.src}/>
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
          Venn Diagrams
        </h2>
        <img style={styles.svg1} src={vennDiagram.src}/>
        
      </div>

      {/* <Tldraw />   */}

      
    </div>
  )
}

export default Home

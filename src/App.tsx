import {ImageSlider} from "./ImageSlider"
import Beach1 from "./images/Beach1.jpg"
import Waterfall1 from "./images/Waterfall1.jpg"
import Beach2 from "./images/Beach2.jpg"
import Waterfall2 from "./images/Waterfall2.jpg"
import Beach3 from "./images/Beach3.jpg"
import Waterfall3 from "./images/Waterfall3.jpg"

const IMAGES = [
  { url: Beach1, alt: "Beach one"},
  { url: Waterfall1, alt: "Waterfall one"},
  { url: Beach2, alt:" Beach two"},
  { url: Waterfall2, alt: "Waterfall two"},
  { url: Beach3, alt:" Beach three"},
  { url: Waterfall3, alt: "Waterfall three"},
]

export default function App() {
  return (
  <div style={{
    maxWidth: "1200px", 
    width: "100%", 
    height: "500px", 
    margin: "0 auto",

  }}
  >
 <ImageSlider images={IMAGES} />
 <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
  </div>
  )
}

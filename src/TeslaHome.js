import TeslaHeader from "./TeslaHeader";
import TeslaSection from "./TeslaSection";
export default function TeslaHome(){
    return(
        <>
        <TeslaHeader/>
        <TeslaSection name='Model 3' tagline='order online for Touchless Delivery' lbuttontext='CUSTOM ORDER' rbuttontext='EXISTING INVENTORY' bgimage='img1.jpg'/>
        <TeslaSection name='Model Y' tagline='order online for Touchless Delivery' lbuttontext='CUSTOM ORDER' rbuttontext='EXISTING INVENTORY' bgimage='img2.jpg'/>
        <TeslaSection name='Model S' tagline='order online for Touchless Delivery' lbuttontext='CUSTOM ORDER' rbuttontext='EXISTING INVENTORY' bgimage='img3.jpg' />
        <TeslaSection name='Model X' tagline='order online for Touchless Delivery' lbuttontext='CUSTOM ORDER' rbuttontext='EXISTING INVENTORY'bgimage='img4.jpg'/>
        <TeslaSection name='Solar Panels' tagline='Lowest Cost Solar Panel in America' lbuttontext='ORDER NOW' rbuttontext='LEARN MORE' bgimage='img5.jpg'/>
        <TeslaSection name='Solar Roof' tagline='Produce Clean Energy From Your Roof' lbuttontext='ORDER NOw' rbuttontext='LEARN MORE' bgimage='img7.jpg'/>
        </>
        
    )
}
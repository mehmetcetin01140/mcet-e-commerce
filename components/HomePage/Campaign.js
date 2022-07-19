import React from 'react'
import Image from "next/image"
import {Row,Col} from "react-bootstrap"
export default function Campaign() {
    const campaignObject = [{src:"/tl.png",text:"Kuponlar"},{src:"/time.png",text:"Saatlik Fırsatlar"},{src:"/discount.png",text:"Kampanyalar"},{src:"/boost.png",text:"Fırsat Ürünleri"}]
    const campaignLoop = () => {
        return(
            <Row>
            {

            
                campaignObject.map(campaign=>(
                  <Col md={3} xs={6} className="content">
                    <img src={campaign.src} />
                    <span>{campaign.text}</span>
                    </Col>
                ))
            }
             </Row>
        )
    }
    const returnCampaign = campaignLoop()
  return (
    <div className='campaign-container'>
        {returnCampaign}
    </div>
  )
}

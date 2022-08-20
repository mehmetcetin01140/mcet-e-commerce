import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
export default function Campaign() {
  const campaignObject = [
    { src: "/tl.png", text: "Kuponlar" },
    { src: "/time.png", text: "Saatlik Fırsatlar" },
    { src: "/discount.png", text: "Kampanyalar" },
    { src: "/boost.png", text: "Fırsat Ürünleri" },
  ];
  const campaignLoop = () => {
    return (
      <Row>
        {campaignObject.map((campaign,i) => (
          <Col md={3} xs={6} className="content" key={i}>
            <img src={campaign.src} alt={i} />
            <span>{campaign.text}</span>
          </Col>
        ))}
      </Row>
    );
  };
  const returnCampaign = campaignLoop();
  return <div className="campaign-container">{returnCampaign}</div>;
}

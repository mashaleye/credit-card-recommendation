import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import "./style.css";

export const Aaa = () => {
  return (
    <div className = "flex-container">
    <div className="AAA flex-item">
      
      <ButtonPrimary className="mask-group" text="Apply now" />
      <ButtonPrimary className="button-primary-instance" text="Looking for help?" />
      <img className="group" alt="Group" src="/img/group-2222.png" />
      <img className="img" alt="Group" src="/img/group-2221.png" />
      <img className="vector" alt="Vector" src="/img/vector-2.png" />
      <span className="element">750 - 850</span>
      <img className="vector-2" alt="Vector" src="/img/vector-2.png" />
      <span className="element-APR">20% APR</span>
      <span className="element-annual-fee">$0 annual fee</span>
      <div className="overlap">
        
      <div >
      <p className ="alternatives">Alternatives</p>
      </div>
      
      <span className="alternatives-desc">Discover cards are widely accepted for purchases at various merchants and can be used for various financial transactions, including making purchases, paying bills, and accessing cash advances. The card typically comes with different features and benefits, such as cashback rewards and various perks, depending on the specific card and its terms and conditions.</span>
      <span className="alternatives-desc2">The American Express Black Card is invitation-only, making it one of the most exclusive credit cards in the world. To even be considered for an invitation, you typically need to have a substantial income and a high net worth.</span>
    
      </div>
      <img className="img-2" alt="Img" src="/img/513dc78ed83305e46229e3e74d53239c-sky-1.png" />
      <span className="subtitle">The American Express Black Card is invitation-only, making it one of the most exclusive credit cards in the world. To even be considered for an invitation, you typically need to have a substantial income and a high net worth.</span>
      <span className="title">Your Best Value Proposition</span>
      <header className="header">
        <div className="overlap-group">
          <img className="wand-wallet" alt="Wand wallet" src="/img/wand-wallet.png" />
        </div>
      </header>
    </div>
    </div>
  );
};

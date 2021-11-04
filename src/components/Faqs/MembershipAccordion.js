import React from 'react'
import './MembershipAccordion.less'

export default function GeneralAccordion() {
    const Accordion = ({ title, children }) => {
        const [isOpen, setOpen] = React.useState(false);
        return (
          <div className="accordion-wrapper">
            
            <div
              className={`accordion-title ${isOpen ? "open" : ""}`}
              onClick={() => setOpen(!isOpen)}
              >
              {title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
              <div className="accordion-content">{children}</div>
            </div>
          </div>
        );
      };
        return (
          <div>
              <div className="wrapper">
                    <Accordion title="How do I become a member?" className="leading-4">
                    You can join the CDS by filling the form below and collecting an introduction letter from the 
                    NYSC schedule officer for the CDS when we communicate to you that it is available.
                    </Accordion>
                    <Accordion title="What are the requirements to become a member?" className="leading-4">
                    You can be a member of the CDS regardless of your professional discipline. 
                    All we require is that you be open and willing to grow.
                    </Accordion>
                    <Accordion title="Are there any professional advantages for members?" className="leading-4">
                    Yes. We offer training on using basic google tools as part of the benefits of being a member of the CDS. 
                    We also work with partners 
                    who offer training that can help build your digital skills.
                    Another benefit of the CDS is that in the one year of your NYSC, you can have projects that would boost 
                    your portfolio and work/volunteer experience. Our goal is to churn out employable youths into the workforce.
                    </Accordion>
                    <Accordion title="Can I lose my membership?" className="leading-4">
                    We expect commitments from our members because we want to be proud of every youth that has gone through the CDS. 
                    If a corp member is consistently absent from CDS meetings, doesn’t contribute to assigned projects, 
                    and disregards constituted authority then the corp member can lose their membership.
                    </Accordion>
                </div>
          </div>
    )
}

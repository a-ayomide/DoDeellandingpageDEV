import React from 'react'
import './GeneralAccordion.less'

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
                    <Accordion title="How can I join the CDS?" className="leading-4">
                    You can join the CDS by filling the form below and collecting an introduction letter 
                    from the NYSC schedule officer for the CDS when we communicate to you that it is available.
                    </Accordion>
                    <Accordion title="When does the CDS meet?" className="leading-4">
                    In line with embracing the digital world, we hold most of our weekly 
                    CDS meetings virtually and meet physically once a month.
                    </Accordion>
                </div>
          </div>
    )
}

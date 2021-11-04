import React from 'react'
import './ProjectsAccordion.less'

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
                    <Accordion title="Do I need tech skills to join the CDS?" className="leading-4">
                    No, we offer training on using basic google tools as part of the benefits of being a member of the CDS. 
                    We also work with partners who offer training that can help build your digital skills.
                    </Accordion>
                    <Accordion title="Where do you get money to fund projects?" className="leading-4">
                    As with any NYSC CDS project, youth corp members are not expected to fund projects with their personal funds. 
                    They are to seek out partners who would be interested in collaborating on projects.
                    </Accordion>
                    <Accordion title="Can I use projects that I worked on for my CV?" className="leading-4">
                    Yes. One of the benefits of the CDS is that in the one year of your NYSC, you can have projects that would 
                    boost your portfolio and work/volunteer experience. Our goal is to churn out employable youths into the workforce.
                    </Accordion>
                    <Accordion title="Will I learn skills necessary to work on the project?" className="leading-4">
                    We offer training on using basic google tools as part of the benefits of being a member of the CDS. 
                    We also work with partners who offer training that can help build your digital skills.
                    </Accordion>
                </div>
          </div>
    )
}

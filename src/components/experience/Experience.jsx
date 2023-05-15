import "./Experience.css"

const Experience = ({start,end="",company,position}) => {
  return (
    <div className="experience">
        <div className="experience__container">
            <h3 className="experience__position">{position}</h3>
            <p className="experience__company">{company}</p>
        </div>
        <div className="experience__time">
            <p className="time__paragraph">{start}{end ? " - ":""}{end}</p>
        </div>
    </div>
  )
}
export default Experience
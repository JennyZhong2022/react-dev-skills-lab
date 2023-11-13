

const SkillListItem = ({skill}) => {


 

  return (
  
        <li className="SkillListItem">  {skill.name} <span className="level">LEVEL {skill.level }</span></li>
   
  )
}

export default SkillListItem
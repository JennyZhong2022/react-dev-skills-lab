import SkillListItem from'./SkillListItem'

const SkillList = ({skills}) => {
  return (
    
      <ul>
        {skills.map((skill,index) => (
          <SkillListItem key={index} skill={skill} />
        ))}
      </ul>
      
   
  )
}

export default SkillList
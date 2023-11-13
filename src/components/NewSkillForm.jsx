import { useState } from "react";

const NewSkillForm = ({setSkills}) => {

  const [skill, setSkill] = useState('')
  const [level, setLevel] = useState(3)
  const _handleLevel = (e) => {
    setLevel(e.target.value)
  }

  const _handleSkill = (e) => {
    setSkill(e.target.value)
  }

  const _handleSubmit = (e) => {
    // e.preventDefault() method in JavaScript and React is commonly used to prevent the default behavior of an event.when the form is submitted, the handleSubmit function is called, and e.preventDefault() prevents the browser's default page reload behavior, allowing you to handle the form data without leaving the current page. 
    e.preventDefault()
    if (skill)
      //add new skill to skills list ,level:level  can be written in level like that { name: skill, level }
      setSkills(prevSkill => [...prevSkill, { name: skill, level:level }])
    // reset the form values
    setSkill('')
    setLevel(3)
  }

  return (
    <form className="NewSkillForm" onSubmit={_handleSubmit}>
      <label htmlFor="skill" >Skill <input id="skill"  type="text" onChange={_handleSkill} value={skill}/></label>
      <label htmlFor="level">Level
        <select id="level"onChange={_handleLevel} value={level}>
          <option value={1} >1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}

export default NewSkillForm
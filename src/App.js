import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
import UserCount from "./components/CourseGoals/user_count/UserCount";
import InvalidDataPop from "./components/CourseGoals/popup_box/InvalidDataPop";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  let [userCount, setUserCount] = useState(false);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No goals found</p>;

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  const countHandler = () => {
    setUserCount(true);
    courseGoals.length = 5;
  };

  let fiveDataPopUP =
    !userCount && courseGoals.length === 5 ? (
      <InvalidDataPop
        title="5 data enter successfully"
        message="5 data enter successfully"
        onConfirm={countHandler}
      />
    ) : (
      ""
    );

  return (
    <>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <UserCount>{courseGoals.length}</UserCount>
      {fiveDataPopUP}
      <section id="goals">{content}</section>
    </>
  );
};

export default App;

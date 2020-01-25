
import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"


const GET_ASSESSMENT = gql`
	query {
	assessment (id: "5ddxfsnXcQzHUogZ_YH7YIXLFMvv0ysl") {
	  questions {
		question
		text
		description
		choices {
		  id
		  text,
		}
	  }
	  
	}
  }
`;
export default function Questions() {
	return (
	  <Query query={GET_ASSESSMENT}>
		{({ loading, error, data }) => {
		  if (loading) return "Loading...";
		  if (error) return `Error! ${error.message}`;
  
		  return (
			<div className="characters">
			  {data.assessment.questions.map(question => (
				<div key={question.text} className="question">
				  <p>{question.text}</p>
				  <hr></hr>
				  <p>{question.description}</p>
				  <br></br>
				  <p>{question.question}</p>
				  <br></br>
				  
				</div>
			  ))}
			</div>
		  );
		}}
	  </Query>
	);
  }


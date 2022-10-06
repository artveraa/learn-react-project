import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Survey() {

    const {questionNumber} = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;

    return (
        <div>
            <h1>Survey</h1>
            <h2>Question n°{questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédente</Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivante</Link>
            )}
        </div>
    );
}

export default Survey;
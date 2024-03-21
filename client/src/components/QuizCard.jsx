import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const QuizCard = (props) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/quiz/${props.id}`)}
            className='box-border h-[350px] cursor-pointer rounded-xl bg-easternBlue text-white border-4 border-transparent hover:border-4 hover:border-yellow-200 active:border-yellow-300 hover:scale-105 active:scale-110 ease-in-out duration-300'
        >
            <div className='flex flex-col gap-6 h-1/2 px-2 overflow-x-scroll py-4'>
                <p className='text-xl font-black'>{props.title}</p>
            </div>
            <hr className='border border-white' />
            <div className='flex flex-col gap-4 h-1/2 overflow-ellipsis px-2 py-4'>
                <p className='text-sm font-bold'>
                    By <span className='italic'>{props.author}</span>
                </p>
                <p className='text-sm font-bold'>Uploaded on {props.created}</p>
                <p className='text-sm font-bold'>
                    {props.termsAndDefinitionsLength} Quiz Terms
                </p>
            </div>
        </div>
    );
};

QuizCard.defaultProps = {
    id: '',
    author: '',
    created: '',
    title: '',
    description: '',
    termsAndDefinitionsLength: null
};

QuizCard.propTypes = {
    id: PropTypes.string,
    author: PropTypes.string,
    created: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    termsAndDefinitionsLength: PropTypes.number
};

export default QuizCard;

import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <h3>This is simple Task Manager</h3>
            <h4>Created along with Brad Traversy tutorial</h4>
            <p>
                <Link to='/'>Go back</Link>
            </p>
        </div>
    )
}

export default About;
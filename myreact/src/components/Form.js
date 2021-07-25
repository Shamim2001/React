import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'Javascript',
        text: 'JavaScript is awesome',
        library: 'React',
        check: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                check: e.target.checked,
            });
        } else {
            console.log('Nothing here!');
        }
    };

    submitHandler = (e) => {
        const { title, text, library, check } = this.state;
        e.preventDefault();
        console.log(title, text, library, check);
    };

    render() {
        const { title, text, library, check } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />

                    <textarea name="text" value={text} onChange={this.handleChange} />

                    <br />
                    <br />

                    <select value={library} onChange={this.handleChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>

                    <br />
                    <br />

                    <input type="checkbox" checked={check} onChange={this.handleChange} />

                    <br />
                    <br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

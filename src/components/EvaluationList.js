import React from 'react';
import PropTypes from 'prop-types';

class EvaluationList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      evaluations: (localStorage.getItem('evaluations'))
        ? JSON.parse(localStorage.getItem('evaluations'))
        : {},
      productId: props.productId,
    };
  }

  render() {
    const { evaluations, productId } = this.state;
    const productHasEvaluations = (evaluations[productId]);

    if (productHasEvaluations) {
      return (
        <div>
          {Object.keys(evaluations[productId]).map((email) => (
            <div key={ email }>
              <hr />
              <h3>{email}</h3>
              <p>
                Estrelas:
                {email[0]}
              </p>
              <p>{email[1]}</p>
            </div>
          ))}
        </div>
      );
    }
    return <h3>Não há avaliações.</h3>;
  }
}

EvaluationList.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default EvaluationList;

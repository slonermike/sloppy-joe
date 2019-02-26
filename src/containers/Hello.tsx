import Hello from '../components/Hello';
import { incrementEnthusiasm, decrementEnthusiasm, EnthusiasmAction } from '../actions/';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps( {enthusiasm, language}: StoreState) {
    return {
        enthusiasm,
        name: language
    }
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(incrementEnthusiasm()),
        onDecrement: () => dispatch(decrementEnthusiasm())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

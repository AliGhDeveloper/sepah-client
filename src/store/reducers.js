import * as actions from './actions';

const initialValue = { siteHeader : { links : [
    {title: "شاخص کل", url : "/shakheskol",children: [], onEdit : false, dropdown: false},
    {title: "افتتاح حساب", url : "/new-bank-account", children : [], onEdit : false, dropdown: false},
    {title: "منوی کشویی", url : "", children : [
        {childtitle: "فرزند 1", childurl : "/dropdown-child-1", onEdit: false},
        {childtitle: "فرزند 2", childurl : "/dropdown-child-2", onEdit: false}
    ], onEdit : false, dropdown: true},
]},
sidebar : {open : false}
};


export default function ( state=initialValue, action ){
    switch(action.type) {
        case actions.ADD_LINK : 
            return { ...state, siteHeader: {...initialValue.siteHeader, links : action.payload} }
        case actions.SIDEBAR : 
            return { ...state, sidebar : action.payload}
        default : 
            return state
    }
}
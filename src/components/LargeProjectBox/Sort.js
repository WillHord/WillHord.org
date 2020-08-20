import React from 'react';

const compareByTitle =(a, b) => {
    if(a.title > b.title){
        return -1;
    } else {
        return 1;
    }

  }

const compareByLanguagePython = (a,b) => {

    if(a.props.programmingLanguages.includes('python') && b.props.programmingLanguages.includes('python')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('python')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageSql = (a,b) => {
    if(a.props.programmingLanguages.includes('sql') && b.props.programmingLanguages.includes('python')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('sql')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageJava = (a,b) => {
    if(a.props.programmingLanguages.includes('Java') && b.props.programmingLanguages.includes('Java')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('Java')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageCpp = (a,b) => {
    if(a.props.programmingLanguages.includes('C++') && b.props.programmingLanguages.includes('C++')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('C++')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageHTML = (a,b) => {
    if(a.props.programmingLanguages.includes('HTML') && b.props.programmingLanguages.includes('HTML')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('HTML')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageCSS = (a,b) => {
    if(a.props.programmingLanguages.includes('CSS') && b.props.programmingLanguages.includes('CSS')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('CSS')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageJavaScript = (a,b) => {
    if(a.props.programmingLanguages.includes('JavaScript') && b.props.programmingLanguages.includes('JavaScript')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('JavaScript')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageReactJS = (a,b) => {
    if(a.props.programmingLanguages.includes('React Js') && b.props.programmingLanguages.includes('React JS')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('React JS')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageR = (a,b) => {
    if(a.props.programmingLanguages.includes('R') && b.props.programmingLanguages.includes('R')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('R')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguageCS = (a,b) => {
    if(a.props.programmingLanguages.includes('C#') && b.props.programmingLanguages.includes('C#')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('C#')){
        return -1;
    } else {
        return 1;
    }
}

const compareByLanguagePHP = (a,b) => {
    if(a.props.programmingLanguages.includes('PHP') && b.props.programmingLanguages.includes('PHP')){
        if(a.title > b.title){
            return -1;
        } else {
            return 1;
        }
    } else if(a.props.programmingLanguages.includes('PHP')){
        return -1;
    } else {
        return 1;
    }
}





const Sort= ({children, by})=> {
    switch(by){
        default:
            return children;
        case 'title':
            return React.Children.toArray(children).sort(compareByTitle);
        case 'python':
            return React.Children.toArray(children).sort(compareByLanguagePython);
        case 'sql':
            return React.Children.toArray(children).sort(compareByLanguageSql);
        case 'Java':
            return React.Children.toArray(children).sort(compareByLanguageJava);
        case 'C++':
            return React.Children.toArray(children).sort(compareByLanguageCpp);
        case 'HTML':
            return React.Children.toArray(children).sort(compareByLanguageHTML);
        case 'CSS':
            return React.Children.toArray(children).sort(compareByLanguageCSS);
        case 'JavaScript':
            return React.Children.toArray(children).sort(compareByLanguageJavaScript);
        case 'React JS':
            return React.Children.toArray(children).sort(compareByLanguageReactJS)
        case 'R':
            return React.Children.toArray(children).sort(compareByLanguageR)
        case 'C#':
            return React.Children.toArray(children).sort(compareByLanguageCS)
        case 'PHP':
            return React.Children.toArray(children).sort(compareByLanguagePHP)
    }

}

export default Sort;
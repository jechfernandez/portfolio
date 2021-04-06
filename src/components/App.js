import '../stylesheets/App.scss';
// import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

//   const renderDetail = props => {
//     console.log (props.match.params);
//     const id = parseInt (props.match.params.id);
//     const selectCharacter = characters.find (character => {
//       return character.id === id;
//     });
//     return <CharacterDetail character={selectCharacter} />;
//   };

//   const handleReset = () => {
//     setCharacters (characters);
//     setName ('');
//     setGender ('all');
//     setSpecies ('all');
//     setStatus ('all');
//   };

//   return (
//     <div className="app">
//       <div className="page">
//         <Header />
//         <Switch>
//           <Route exact path="/">
//             <Filter
//             name={name}
//             gender={gender}
//             species={species}
//             status={status}
//             handleFilter={handleFilter}
//             handleReset={handleReset} />
//             <CharacterList characters={filterCharacter} />
//           </Route>
//           <Route path="/character/:id" render={renderDetail} />
//         </Switch>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;

export default function App () {
  return (
    <div className="page">
      <Router>
        <Header />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <Home />
      <Footer />
    </div>
  );
}

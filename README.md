# ztm-react-master-project
Prototype of ilern platform dashboard, based on the ecommerce site from ZTM

---

**Quick notes about React**
1. REACT BASICS
...1.1 yarn/npm
...1.2 create-react-app
...1.3 functional vs class components
...1.4 JSX syntax


2. **React Router**
Tenim la manera de crear diferents pàgines i enrutar-les entre elles amb _react-router-dom_ directament desde front.

En el moment d'afegir un component a App.js:
```return(
<div>
<Route exact={true/false} path='/pathHomePage' component={NomDelComponentPrincipal} />
<Route exact={true/false} path='/pathSecondaryPage' component={NomDelComponentSecundari} />
```

*notes: *
- exact hem de posar {true/false}, també el podem deixar en blanc i es com si haguessim posat true --> Si està true significa que sempre que trobi exactament el path que li hem indicat, farà un render de la pàgina que li passem al paràmetre de component.

- path és un string on posem el path del directori on està la pagina que volem enrutar

- component és un jsx on indiquem quina és la pagina que volem que es mostri a la nostre app quan tinguem el path que li hem indicat.

A més podem utilitzar *Link* per crear un text d'hipervincle per enviar a les altres pàgines (*entre d'altres formes d'enrutar, es poden trobar a la documentacio de react router)*



(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(2),i=a.n(r),o=(a(14),a(6)),l=a(3),c=a(4),h=a(7),u=a(5),d=a(8),p=(a(16),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={board:Array(361).fill(null),player:n.a.createElement("div",{className:"circle white"}),winner:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"checkWinner",value:function(){for(var e=[],t=0;t<361;t++)t%19<=14&&e.push([t,t+1,t+2,t+3,t+4]),t<=284&&e.push([t,t+19,t+38,t+57,t+76]),t%19<=14&&Math.floor(t/19)<15&&e.push([t,t+20,t+40,t+60,t+80]),t%19>=4&&Math.floor(t/19)<15&&e.push([t,t+18,t+36,t+54,t+72]);for(var a=0;a<e.length;a++){var s=Object(o.a)(e[a],5),n=s[0],r=s[1],i=s[2],l=s[3],c=s[4];null!==this.state.board[n]&&null!==this.state.board[r]&&null!==this.state.board[i]&&null!==this.state.board[l]&&null!==this.state.board[c]&&this.state.board[n].props.className===this.state.board[r].props.className&&this.state.board[n].props.className===this.state.board[i].props.className&&this.state.board[n].props.className===this.state.board[l].props.className&&this.state.board[n].props.className===this.state.board[c].props.className&&("circle white"===this.state.board[n].props.className?this.setState({winner:"White wins"}):this.setState({winner:"Black wins"}))}}},{key:"handleClick",value:function(e){var t=this.state.board;null!==this.state.board[e]||this.state.winner||(t[e]=this.state.player,this.setState({board:t,player:"circle white"===this.state.player.props.className?n.a.createElement("div",{className:"circle black"}):n.a.createElement("div",{className:"circle white"})}),this.checkWinner())}},{key:"render",value:function(){var e=this,t=this.state.board.map(function(t,a){return n.a.createElement("div",{className:"box",key:a,onClick:function(){return e.handleClick(a)}},t)});return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"five in a row"),n.a.createElement("p",null,this.state.winner),n.a.createElement("div",{className:"board"},t))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.b7d636fd.chunk.js.map
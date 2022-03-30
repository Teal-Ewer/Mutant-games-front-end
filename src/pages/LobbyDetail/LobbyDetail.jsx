import React, { useState, useEffect }from "react";
import { Link, useParams } from "react-router-dom";
import Message from "../../components/Message/Message.jsx";
import * as lobbyService from "../../services/lobbyService";
import "./LobbyDetail.css";

function LobbyDetail({ handleJoin, lobby, handleDeleteLobby, user }) {
	const { lobby_id } = useParams()
	const [ lobbyInfo, setLobbyInfo ] = useState({})

	useEffect(() => {
		lobbyService.getLobbyById(lobby_id)
			.then(res => {
				setLobbyInfo(res)
				console.log('setting state',res);
			})
	}, [])

	return (
		<>
	
			<div className="lobby-detail">
				<div className="main">
					<div className="leftSide">
						<div className="leftSide-items">
							<div className="gameName">
								<h1>Game: {lobbyInfo?.game?.name}</h1>
								{console.log('jsx rendering',lobbyInfo)}
							</div>
							<div>
								{lobbyInfo?.game?.description ? (
									<p>{lobbyInfo?.game?.description}</p>
								) : (
									<p> No description Available </p>
								)}
							</div>
						</div>
					</div>
					<div className="rightside">
						<div className="rightside-item">
							<div className="lobbyname">
								<h2>Lobby Name: {lobbyInfo?.name}</h2>
							</div>
							<h2>{lobbyInfo?.owner?.name}'s Lobby</h2>
							<h2>
								Waiting Players:
								{lobbyInfo.waitingPlayers?.map((player,i) => (
									<span key={i}> {player.name}, </span>
								))}
							</h2>
							<h2>
								Open spots:{" "}
								{lobbyInfo?.game?.maxPlayers - lobbyInfo?.waitingPlayers?.length}
							</h2>
						</div>
						<>

						{/* { lobbyInfo?.owner?._id === lobbyInfo.owner._id ? (
						<div> 
						<Link to="/"  state={lobby}>
						<button onClick={() => handleDeleteLobby(lobby._id)}>Delete</button>
					</Link>
					</div>
							)	: (
								<h1>1</h1>
							)} */}
							
							<Link to="/" >
						<button onClick={() => handleJoin(lobbyInfo?._id)}>leave lobby</button>
					</Link>
						</>
					</div>
				</div>
				<Message details={lobbyInfo} user={user}/>
			</div>
		</>
	);
}

export default LobbyDetail;

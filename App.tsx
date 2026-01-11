
import React, { useState, useCallback } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import Home from './views/Home';
import CreateQuiz from './views/CreateQuiz';
import Lobby from './views/Lobby';
import QuizRoom from './views/QuizRoom';
import Results from './views/Results';

type View = 'home' | 'create' | 'lobby' | 'quiz' | 'results';

const AppContent: React.FC = () => {
    const [view, setView] = useState<View>('home');
    const { gameState, player, error } = useGame();

    const renderView = () => {
        if (error) {
            // A simple error view
            return (
                 <div className="text-center text-red-400">
                    <h2 className="text-2xl font-bold mb-4">An Error Occurred</h2>
                    <p>{error}</p>
                 </div>
            )
        }

        if (gameState && gameState.status === 'in-progress' && view !== 'quiz') {
            setView('quiz');
        }
        
        if (gameState && gameState.status === 'finished' && view !== 'results') {
            setView('results');
        }
        
        if (!gameState && (view === 'lobby' || view === 'quiz' || view === 'results')) {
             setView('home');
        }


        switch (view) {
            case 'create':
                return <CreateQuiz onQuizCreated={() => setView('lobby')} />;
            case 'lobby':
                return <Lobby onGameStart={() => setView('quiz')} />;
            case 'quiz':
                return <QuizRoom onQuizEnd={() => setView('results')} />;
            case 'results':
                 return <Results onPlayAgain={() => setView('home')} />;
            case 'home':
            default:
                return <Home onCreate={() => setView('create')} onJoin={() => setView('lobby')} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white selection:bg-orange-500/30">
            <div className="fixed inset-0 -z-10 h-full w-full bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                <div className={`w-full max-w-4xl mx-auto transition-opacity duration-500 ease-in-out`}>
                    {renderView()}
                </div>
            </main>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <GameProvider>
            <AppContent />
        </GameProvider>
    );
};


export default App;

import Button from './ui/Button';
import Header from './ui/Header';



function App() 
{
    
    const createShader: () => void = () => 
    {
        //todo call service
        console.log("create Shader");
    }

    const removeShader: () => void = () =>
    {
        console.log('remove shader');
    }
    

    return (
        
        <div className="app py-10 grid gap-14">
            
            <div className='px-10 w-full border-box'>

                <Header content='Webgl2 react app'/>

            </div>

            <div className='px-10 flex gap-6 flex-wrap w-full border-box'>
                
                <Button
                    className='text-lg font-medium
                        px-4 
                        py-4 
                        bg-cyan-500 
                        hover:bg-cyan-600 
                        transition
                        rounded-md
                        text-white
                    '
                    onClick={createShader} 
                    content={'Add shader'}
                />

                <Button 
                    className='px-4 py-4 bg-cyan-200 hover:bg-cyan-300 text-lg rounded-md' 
                    content='Hotkeys list'
                />
            
            </div>


        </div>
    );
}


export default App;

import { languages, tools } from '../data'
import Bar from '../components/Bar'

const resume = () => {
    return (
        <div className='px-6 py-2'>
                {/*education and exp*/}    

                <div className='grid gap-6 md:grid-cols-2'>

                    <div>
                        <h5 className='my-3 text-2xl font-bold'>Education</h5>
                          <div>
                            <h5 className='my-2 text-xl font-bold'>BCom Strategic Brand Management</h5>
                            <p className='font-semibold'>Vega School of Brand Leadership</p>
                          </div>
                    </div> 
                    <div>
                        <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                          <div>
                            <h5 className='my-2 text-xl font-bold'>BCom Strategic Brand Management</h5>
                            <p className='font-semibold'>Vega School of Brand Leadership</p>
                          </div>
                    </div> 
                </div>
                
                {/*languages and tools*/}  

                <div className="grid gap-6 md:grid-cols-2">
                    
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className='my-2'>
                        {
                            languages.map(language=><Bar data={language} key={language.name}/>)
                        }
                    </div>
                </div>   
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
                    <div className='my-2'>
                        {
                            tools.map(tool=><Bar data={tool} key={tool.name}/>)
                        }
                    </div>
                </div> 

                </div>
        </div>
    )
}

export default resume

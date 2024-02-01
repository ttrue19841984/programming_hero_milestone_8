import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams();
    // console.log(id, jobs)
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyjob = () =>{
        saveJobApplication(idInt)
        toast('You have applied successfully');
    }

  return (
    <div>
        <Helmet>
          <title>Job Details: {id}</title>
        </Helmet>
       <div className="grid gap-4 md:grid-cols-4">
            <div className="border md:col-span-3">
            <h2 className="text-4xl">Details coming here</h2>
            <h2>Job details of:{job.job_title}</h2>
            <p>{job.company_name}</p>
            </div>
            <div className="border">
                <h2 className="text-2xl">Side things</h2>
                <button onClick={handleApplyjob} className="btn btn-primary w-full">Appay</button>
            </div>
            
       </div>
       <ToastContainer />
    </div>
  )
}

export default JobDetails

const our_services = [
    {
      service_title: "Cloud Infrastructure",
      service_description: "We are dedicated to providing the highest quality cloud infrastructure, and we do so by setting up low latency secured connections to the cloud on your behalf. The future of business communication, productivity and security is backed up to the cloud. We have 24-7 availability in supporting your future business ventures on the cloud.",
    }
    ,
    {
      service_title: "Middleware",
      service_description: "As new technology emerges, your business model must constantly adapt. Our expertise in middleware will make sure that your workflow is not compromised and allows you to scale effectively.",
    },
    {
      service_title: "Web 3",
      service_description: "As passionate believers in the future, we have honed our skills in Blockchain technology, particularly in Cryptocurrency and Digital Products. Our goal is to enable borderless digital transactions at any time and from any location without the use of third-party brokers.",
    },
    {
      service_title: "Start-up Consulting",
      service_description: "With increasing competition and constantly evolving technology, new entrepreneurs require a solid business plan before launching their new business. Our team of experts can provide you with a wealth of knowledge in a variety of fields, including finance, operations, and scalable technology. Our collective experience and expertise will pave the way for your success.",
    }
  ]

const Test = ({idx, title, content}) => {

    return (
        <div>
          <div className="grid grid-cols-6 md:grid-cols-12">
            <div className="items-start relative px-20  2xl:w-[800px] xl:w-[600px] md:w-[400px] min-w-[400px] justify-content-center col-span-12 md:col-span-6">
                <h2 className="text-2xl font-bold">Our Services</h2>
                
                <h1 className="text-4xl font-bold">{title=our_services[idx]['service_title']}</h1>
                <p className="py-5">{content=our_services[idx]['service_description']}</p>
            </div>
            <div className="relative 2xl:w-[800px] xl:w-[600px] md:w-[480px] min-w-[480px] invisible md:visible align-items-center">
                <img className="relative py-10 md:block left-[60%] top-[30%] md:translate-x-[-76%] lg:translate-x-[-73%] md:translate-y-[-44%]" height="512px" width="512px" src="../src/assets/Cloud/Cloud_banner_2.png" alt=".."/>
            </div>
          </div>
        </div>
    )
}

export {Test}
import CreatableSelect from 'react-select/creatable';


export default function Contact() {
    const options1 = [
        { value: 'Teacher', label: 'Teacher' },
        { value: 'Student', label: 'Student' }
    ]
    const options2 = [
        { value: 'SUbject', label: 'Payment' },
        { value: 'Subject', label: 'Registration' },
        { value: 'Subject', label: 'Contract' },
        { value: 'Subject', label: 'Class Schedule' },
        { value: 'Subject', label: 'Report Abuse' },
        { value: 'Subject', label: 'Other' },
    ]
    const customStyles = {
        control: (provided) => ({
            ...provided,
            height: '40px', // Adjust the height as needed
            width: '90%', // Adjust the width as needed
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            width: '40px', // Hide the dropdown indicator
        }),
        indicatorSeparator: () => ({ display: 'none' }), // Hide the indicator separator
        menu: (provided) => ({
            ...provided,
            width: '90%', // Adjust the width of the dropdown menu
        })
    };
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <h2 style={{ fontFamily: 'raleway', fontWeight: '700' }} className='mt-4'>Contact us</h2>
                        <form action="">
                            <div>
                                <label htmlFor="" >Select Type <span className='text-danger'>*</span></label>
                                <CreatableSelect className=' mb-2 mt-2 '
                                    options={options1}
                                    placeholder='Select Your Type'
                                    styles={customStyles} />
                            </div>
                            <div>
                                <label htmlFor="">Subject <span className='text-danger'>*</span></label>
                                <CreatableSelect className=' mb-2 mt-2'
                                    options={options2}
                                    placeholder='Select Issue'
                                    styles={customStyles}
                                />
                            </div>
                            <div>
                                <label htmlFor="">Name <span className='text-danger'>*</span></label> <br />
                                <input type="text" className=' form-control '
                                    style={{ height: '40px', width: '90%' }}
                                    placeholder='Enter Name' />
                            </div>
                            <div>
                                <label htmlFor="">Email <span className='text-danger'>*</span></label> <br />
                                <input type="email" className=' form-control'
                                    style={{ height: '40px', width: '90%' }}
                                    placeholder='Enter Email' />
                            </div>
                            <div>
                                <label htmlFor="">Message <span className='text-danger'>*</span></label> <br />
                                <textarea className="form-control "
                                    placeholder="Leave a comment here"
                                    style={{ width: '90%' }}
                                    id="floatingTextarea2" ></textarea>
                            </div>
                            <div className='mt-2'>
                                <button type='submit' className='btn btn-primary'>
                                    Send Message
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

import { Transition } from '@headlessui/react'
export const Expand = ({children, state=false,className=null}) =>{
    const design = (
        <>
            <Transition
             className={className}
             show={state}
              
            >
                {
                children
                 
                }
            </Transition>
        </>
    );
    return design;
}
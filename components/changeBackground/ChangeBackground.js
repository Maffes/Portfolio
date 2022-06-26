import { InView } from 'react-intersection-observer';

export const ChangeBackground = ({children}) => {
    if (typeof window === 'object') {
    const bgColour = document.body
    }
    
    const backgroundState = inView => {
        return (inView ? bgColour.classList.add("invert") : bgColour.classList.remove("invert")) 
    }

    return (
            <InView as="div" threshold={0.4} onChange={(inView, entry) => backgroundState(inView)}>
                {children}
            </InView>
    );
};

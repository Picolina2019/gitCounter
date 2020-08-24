import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import {star} from 'react-icons-kit/ikons/star';
import {eye} from 'react-icons-kit/iconic/eye'


const SideIconContainer = 
    withBaseIcon({ size: 16, style: {color: 'yellow'}});
    const SideIconContainer1 = 
    withBaseIcon({ size: 16, style: {color: 'darkBlue'}})

    export const Star = () => <SideIconContainer icon={star}/>
    export const Eye= () => <SideIconContainer1 icon={eye}/>
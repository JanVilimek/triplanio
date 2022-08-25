import { IonSpinner } from '@ionic/react';
import React from 'react';
function Loading() {
  
  /**
   * This example does not make use of the dismiss
   * method returned from `useIonLoading`, but it can
   * be used for more complex scenarios.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <IonSpinner name={"dots"}/>
  )
    
}
export default Loading;
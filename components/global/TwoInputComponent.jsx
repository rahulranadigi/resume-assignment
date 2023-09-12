import InputComponent from '../global/InputComponent'

const TwoInputComponent = (fields) => {
  return (
    <div>
      {fields?.map((field,index)=>{
        <InputComponent key={index}/>
      })}
          
    </div>
  );
};

export default TwoInputComponent;

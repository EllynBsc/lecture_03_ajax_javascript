import $ from 'jquery'; // this os the jquery code specific to this package
import 'select2';


const initSelect2 = () => {
  $('.select2').select2({ width: '100%' }); // (~ document.querySelectorAll)
};

export { initSelect2 };

const element = document.querySelector('#select-id');
const choices = new Choices(element, {
searchEnabled: false, shouldSort: false, shouldSortItems: false,itemSelectText: '',callbackOnInit: null, placeholder:true,renderChoiceLimit:3,  position: 'bottom',
});
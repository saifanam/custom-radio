# README #

Custom and Dependent Radio components

### Key points ###

* The main Yes / No and the dependent value ranges are the same ImagedRadioButtons component.
* They are made to look different through custom styles. Check it out in style.css.

### Functionality ###

* Selecting Yes shows the range values.
* Selecting No hides the range values.

Options can be passed in the following format:

```javascript
    const mainOptions = [
      {
        value: 'Yes',
        label: 'Yes',
      },
      {
        value: 'No',
        label: 'No',
      },
    ];
    const dependentOptions = [
      {
        value: 'TOUR',
        label: 'Tour',
      },
      {
        value: 'BUSINESS',
        label: 'Business',
      },
      {
        value: 'WORK',
        label: 'Work',
      },
    ];
```

![Radio](demo-images/radio.png)

import './index.scss';
//import '../../node_modules/air-datepicker/dist/js/datepicker.min.js';
import '../components/dropdown/date-dropdown/datepicker.js';
var disabledDays = [0, 6];

$('#disabled-days').datepicker({
    onRenderCell: function (date, cellType) {
        if (cellType == 'day') {
            var day = date.getDay(),
                isDisabled = disabledDays.indexOf(day) != -1;

            return {
                disabled: isDisabled
            }
        }
    }
})
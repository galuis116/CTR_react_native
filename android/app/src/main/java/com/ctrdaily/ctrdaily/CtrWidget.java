package com.ctrdaily.ctrdaily;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.util.Log;
import android.widget.RemoteViews;
import android.content.SharedPreferences;
import org.json.JSONException;
import org.json.JSONObject;
/**
 * Implementation of App Widget functionality.
 */
public class CtrWidget extends AppWidgetProvider {

    public static String ACTION_CLICK_WIDGET = "action_click_widget";

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
        try{
            SharedPreferences sharedPref = context.getSharedPreferences("DATA", Context.MODE_PRIVATE);
            String appString = sharedPref.getString("appData", "{\"title\":'', \"meaning\":''}");
            JSONObject appData = new JSONObject(appString);
            // Construct the RemoteViews object
            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.ctr_widget);
            views.setTextViewText(R.id.widget_quote_title, appData.getString("title"));
            views.setTextViewText(R.id.widget_quote_meaning, appData.getString("meaning"));
            // Instruct the widget manager to update the widget
            Intent intent = new Intent(context, CtrWidget.class);
            intent.setAction(ACTION_CLICK_WIDGET);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
            views.setOnClickPendingIntent(R.id.widgetContainer, pendingIntent);

            appWidgetManager.updateAppWidget(appWidgetId, views);
        }
        catch (JSONException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        // There may be multiple widgets active, so update all of them
        for (int appWidgetId : appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId);
        }
    }

    @Override
    public void onEnabled(Context context) {
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }

    @Override
    public void onReceive(Context context, Intent intent) {

        String action = intent.getAction();

        if (action.equals(ACTION_CLICK_WIDGET)) {
            // Get the application context
            Context mContext = context.getApplicationContext();
        /*
            PackageManager
                Class for retrieving various kinds of information related to the application
                packages that are currently installed on the device.
        */
        /*
            public abstract PackageManager getPackageManager ()
                Return PackageManager instance to find global package information.
        */
            // Get an instance of PackageManager
            PackageManager pm = mContext.getPackageManager();

            // Try to launch an app
            try{
            /*
                public abstract Intent getLaunchIntentForPackage (String packageName)
                    Returns a "good" intent to launch a front-door activity in a package. This is used,
                    for example, to implement an "open" button when browsing through packages.
                    The current implementation looks first for a main activity in the category
                    CATEGORY_INFO, and next for a main activity in the category CATEGORY_LAUNCHER.
                    Returns null if neither are found.

                Parameters
                    packageName : The name of the package to inspect.
                Returns
                    A fully-qualified Intent that can be used to launch the main activity in the
                    package. Returns null if the package does not contain such an activity,
                    or if packageName is not recognized.
            */
                // Initialize a new Intent
                Intent activeIntent = pm.getLaunchIntentForPackage("com.ctrdaily.ctrdaily");

            /*
                public Intent addCategory (String category)
                    Add a new category to the intent. Categories provide additional detail about
                    the action the intent performs. When resolving an intent, only activities that
                    provide all of the requested categories will be used.

                Parameters
                    category : The desired category. This can be either one of the predefined
                    Intent categories, or a custom category in your own namespace.
                Returns
                    Returns the same Intent object, for chaining multiple calls into a single statement.
            */
            /*
                public static final String CATEGORY_LAUNCHER
                    Should be displayed in the top-level launcher.

                    Constant Value: "android.intent.category.LAUNCHER"
            */
                // Add category to intent
                activeIntent.addCategory(Intent.CATEGORY_LAUNCHER);

                if(activeIntent == null){
                    // Throw PackageManager NameNotFoundException
                    throw new PackageManager.NameNotFoundException();
                }else{
                    // Start the app
                    mContext.startActivity(activeIntent);
                }
            }catch(PackageManager.NameNotFoundException e){
            /*
                public static int e (String tag, String msg)
                    Send an ERROR log message.

                Parameters
                    tag : Used to identify the source of a log message. It usually identifies the
                        class or activity where the log call occurs.
                    msg : The message you would like logged.
            */
                // Log the exception
                Log.e("Launch",e.getMessage());
            }
        } else {
            super.onReceive(context, intent);
        }
    }

}
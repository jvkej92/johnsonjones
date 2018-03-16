<?php

namespace Statamic\Addons\Pinned;

use Statamic\Extend\Filter;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Collection;

class PinnedFilter extends Filter
{
    /**
     * Perform filtering on a collection
     *
     * @return \Illuminate\Support\Collection
     */
    public function filter()
    {       
        return $this->collection->filter(function ($entry) {            
            
            //Get the match_tags and create an array of values
            $match_tags = explode( '|', $this->get('match_tags', '' ));
            $min_posts = $this->get('min_posts');
            //array that contains the results 
            $results_array = [];
           
            //Checks first to find all pinned resources
            if($entry->get('pinned') == true){
                //creates an array containing all tags of a post
                $post_tags = $entry->get('tags');

                //loops through the page tags
                foreach ($match_tags as $match_tag){
                    //loops through all the post tags
                    foreach($post_tags as $post_tag){
                        //if a both tags match the entry is added to the array
                        if($match_tag == $post_tag){
                            // Log::debug('Match tag: ' . $match_tag);
                            // Log::debug('Post tag:' . $post_tag);                           
                            array_push($results_array, $entry);
                        }
                    }
                }
            }

            //Checks if the arry length is less than 9
            if( count($results_array) <= $min_posts){
                if($entry->get('pinned') == false){
                    $post_tags = $entry->get('tags');
                    foreach ($match_tags as $match_tag){
                        
                        foreach($post_tags as $post_tag){
                            
                            if($match_tag == $post_tag){
                      
                                array_push($results_array, $entry);
                            }
                        }
                    }
                }
            }            
            else{
                return $results_array;
            }
            
        });
    }
}
